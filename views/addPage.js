const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <label for="authorName" class="col-sm-2 control-label">Name</label>
    <input type='text' name='authorName'></input><br/>

    <label for="authorEmail" class="col-sm-2 control-label">Email</label>
    <input type='text' name='authorEmail'></input><br/>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <label for="content" class="col-sm-2 control-label">Content</label><br/>
    <textarea name='content'></textarea><br/>

    <label for="status" class="col-sm-2 control-label">Status</label>
    <input name='status' type='text'></input><br/>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
