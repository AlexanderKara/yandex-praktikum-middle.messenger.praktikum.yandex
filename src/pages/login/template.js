export default ` 
   <div class='form-title'>{{title}}</div>
    <div class="form-wrapper">
    <div class="form-inputs-wrapper">
    <input class='input-flex login-input' type="text" id="login" placeholder='login'>
    <input class='input-flex login-input' type="password" id="password" placeholder='password'>
    </div>
    {{> button }}
    </div>
    <a class='form-go-back-link' href="/register">{{goBackLink}}</a>  
`;
