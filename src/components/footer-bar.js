class NoteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>© ${new Date().getFullYear()} Notes App</p>
      </footer>
    `;
  }
}
customElements.define("note-footer", NoteFooter);
