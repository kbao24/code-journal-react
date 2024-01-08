import { ChangeEvent, useState } from 'react';

export function NewEntry() {
  const [Src, setSrc] = useState('../src/images/placeholder-image-square.jpg');

  function handleOnChangeSrc(event: ChangeEvent<HTMLInputElement>) {
    setSrc(event.target.value);
  }

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
            <div className="column-full d-flex align-center"></div>
          </div>
        </div>
      </header>
      <main>
        <div className="container hidden" data-view="entry-form">
          <div className="row">
            <div className="column-full d-flex justify-between">
              <h1 id="formH1">New Entry</h1>
            </div>
          </div>
          <form id="entryForm">
            <div className="row margin-bottom-1">
              <div className="column-half">
                <img
                  className="input-b-radius form-image"
                  id="formImage"
                  src={Src}
                  alt="image of entry image"
                />
              </div>
              <div className="column-half">
                <label className="margin-bottom-1 d-block" htmlFor="title">
                  Title
                </label>
                <input
                  required
                  className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                  type="text"
                  id="formTitle"
                  name="formTitle"
                />
                <label className="margin-bottom-1 d-block" htmlFor="photoUrk">
                  Photo URL
                </label>
                <input
                  onChange={handleOnChangeSrc}
                  required
                  className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                  type="text"
                  id="formURL"
                  name="formURL"
                />
              </div>
            </div>
            <div className="row margin-bottom-1">
              <div className="column-full">
                <label className="margin-bottom-1 d-block" htmlFor="formNotes">
                  Notes
                </label>
                <textarea
                  required
                  className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
                  name="formNotes"
                  id="formNotes"
                  cols={30}
                  rows={10}
                  defaultValue={''}
                />
              </div>
            </div>
            <button className="input-b-radius text-padding purple-background white-text">
              SAVE
            </button>
            <div className="row">
              <div className="column-full d-flex justify-between">
                <button
                  className="invisible delete-entry-button"
                  type="button"
                  id="deleteEntry">
                  Delete Entry
                </button>
              </div>
            </div>
          </form>
          <div className="modal row">
            <div className="column-full d-flex justify-center">
              <p>Are you sure you want to delete this entry?</p>
            </div>
            <div className="column-full d-flex justify-between">
              <button className="modal-button" id="cancelButton">
                Cancel
              </button>
              <button
                className="modal-button red-background white-text"
                id="confirmButton">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
