class NoteHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <h1>Note APP</h1>
    `;
  }
}
customElements.define("note-header", NoteHeader);
