let previewer = function () {

  marked.setOptions({
    breaks: true });


  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  };

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        editorFullScreen: false,
        previewFullScreen: false,
        markdown: placeholder };

      this.handleChange = this.handleChange.bind(this);
      this.handleEditorMax = this.handleEditorMax.bind(this);
      this.handlePreviewMax = this.handlePreviewMax.bind(this);
    }
    handleChange(e) {
      this.setState({
        markdown: e.target.value });

    }
    handleEditorMax() {
      this.setState({
        editorFullScreen: !this.state.editorFullScreen });

    }
    handlePreviewMax() {
      this.setState({
        previewFullScreen: !this.state.previewFullScreen });

    }

    render() {
      const classes = this.state.editorFullScreen ?
      ['editorWrap maximized', 'previewWrap hidden', 'fas fa-compress-arrows-alt'] : this.state.previewFullScreen ? ['editorWrap hidden', 'previewWrap maximized', 'fas fa-compress-arrows-alt'] : ['editorWrap', 'previewWrap', 'fas fa-arrows-alt'];
      return (
        React.createElement("div", { className: "l-2-col" },
        React.createElement("div", { className: classes[0] },
        React.createElement(Header, {
          text: "Editor", icon: classes[2], onClick: this.handleEditorMax }),

        React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })),

        React.createElement("div", { className: classes[1] },
        React.createElement(Header, {
          text: "Preview", icon: classes[2], onClick: this.handlePreviewMax }),

        React.createElement(Preview, { markdown: this.state.markdown }))));



    }}
  ;

  const Header = props => {
    return (
      React.createElement("div", { className: "header" },
      props.text,
      React.createElement("i", { className: props.icon, onClick: props.onClick })));


  };

  const Editor = props => {
    return (
      React.createElement("textarea", { id: "editor", value: props.markdown, onChange: props.onChange, type: "text" }));

  };

  const Preview = props => {
    return (
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: renderer }) } }));

  };

  const placeholder = `
  # Welcome to my React Markdown Previewer!

   ## This is sub-heading
  ### This is sub-sub-heading
_italic text_
**bold text**
\`\`\` Some code \`\`\`
There's also [links](https://www.codepen.io) 
> Block Quotes!

1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...

- List
  - With different indentation levels.
    - And different pointers.
`;

  ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

}();