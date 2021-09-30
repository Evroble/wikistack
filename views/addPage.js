const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>
      <input type="text" placeholder="Author" name="author">  
    </div>
    <br>
    
    <div>
    <input type="email" placeholder="Author Email" name="email"> 
     </div>
     <br>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
    <textarea type="text" placeholder="Enter your post here" name="content" rows="10" cols ="15"></textarea>  
    </div>
    <br>

    <div>
    <input type="checkbox"name="status"><label>Make post live!</label>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);