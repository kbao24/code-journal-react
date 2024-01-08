export function Navigation() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Code Journal</title>
      <link rel="icon" href="images/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="stylesheet" href="css/reset.css" />
      <link rel="stylesheet" href="css/layout.css" />
      <link rel="stylesheet" href="css/styles.css" />
      <header className="header purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <h1 className="white-text">Code Journal</h1>
              <h3>
                <a
                  id="entriesLink"
                  className="entries-link white-text"
                  href="#">
                  Entries
                </a>
              </h3>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
