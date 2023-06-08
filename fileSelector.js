const FileSelector = (props) => {
  const items = props.items;
  const department = props.department;
  const baseUrl = window.location.href.includes(".html") ? "../" : "../../";

  const [currentFile, setCurrentFile] = React.useState();
  const [currentVersions, setCurrentVersions] = React.useState();
  const [selectedVersion, setSelectedVersion] = React.useState();
  const [currentLink, setCurrentLink] = React.useState();

  // Document selector effect
  React.useEffect(() => {
    if (currentFile === undefined) setCurrentVersions(undefined);
    else {
      const versions = items.find((item) => item.title === currentFile);

      if (versions) setCurrentVersions(versions.versions);
      else setCurrentVersions(undefined);

      setSelectedVersion(undefined);
      setCurrentLink(undefined);
    }
  }, [currentFile]);

  React.useEffect(() => {
    if (selectedVersion !== undefined && currentFile !== undefined) {
      setCurrentLink(
        `${baseUrl}documents/${encodeURIComponent(
          department
        )}/${encodeURIComponent(currentFile)}/${encodeURIComponent(
          selectedVersion
        )}`
      );
    } else setCurrentLink(undefined);
  }, [selectedVersion]);

  return (
    <React.Fragment>
      <label
        htmlFor="documentSelect"
        className="mx-auto font-righteous text-xl text-center md:text-3xl"
      >
        Please select a document from the dropdown below
      </label>
      <div className="bg-palette-100 p-2 rounded-lg border-4 border-palette-600 font-roboto mx-auto w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 my-4">
        <select
          value={currentFile === undefined ? "" : currentFile}
          name="documentSelect"
          id="documentSelect"
          className="bg-transparent w-full outline-transparent cursor-pointer text-lg"
          onChange={(ev) => {
            if (ev.target.value && ev.target.value.length > 0)
              setCurrentFile(ev.target.value);
            else setCurrentFile(undefined);
          }}
        >
          <option value="">Select document</option>
          {items.map((item) => (
            <option key={item.title} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <label
        htmlFor="versionSelect"
        className="mx-auto font-righteous text-xl text-center md:text-3xl"
      >
        Please select the document version from the dropdown below
      </label>
      <div className="bg-palette-100 p-2 rounded-lg border-4 border-palette-600 font-roboto mx-auto w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 my-4">
        <select
          value={selectedVersion === undefined ? "" : selectedVersion}
          name="versionSelect"
          id="versionSelect"
          className="bg-transparent w-full outline-transparent cursor-pointer text-lg"
          onChange={(ev) => {
            if (ev.target.value && ev.target.value.length > 0)
              setSelectedVersion(ev.target.value);
            else setSelectedVersion(undefined);
          }}
        >
          {currentVersions === undefined ? (
            <option value="">Please select document first</option>
          ) : (
            <React.Fragment>
              <option value="">Select document version</option>
              {currentVersions.map((version) => (
                <option key={version} value={version}>
                  {version.substring(0, version.lastIndexOf("."))}
                </option>
              ))}
            </React.Fragment>
          )}
        </select>
      </div>
      {currentLink !== undefined && (
        <a
          href={currentLink}
          className="rounded-3xl bg-palette-500 border-palette-500 text-palette-100 hover:bg-palette-100 hover:text-palette-500 transition-[color,background-color,transform] scale-100 hover:scale-110 duration-150 py-4 border-2 px-10 font-righteous w-max mx-auto"
          target="_blank"
          rel="noreferrer noopener"
        >
          View document
        </a>
      )}
    </React.Fragment>
  );
};

window.addEventListener("load", () => {
  const rootElement = document.getElementById("reactRoot");

  const items = JSON.parse(rootElement.dataset.items);
  const department = rootElement.dataset.department;

  ReactDOM.render(
    <FileSelector items={items} department={department} />,
    rootElement
  );
});
