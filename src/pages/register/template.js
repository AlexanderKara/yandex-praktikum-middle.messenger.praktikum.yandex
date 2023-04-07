export default ` 
    <div class='form-title'>{{title}}</div>
    <div class="form-wrapper">
    <div class="form-inputs-wrapper">
    <input class="input-flex" type="text" id="first_name" name="first_name" placeholder="first_name">
    <input class="input-flex" type="text" id="second_name" name="second_name" placeholder="second_name">
    <input class="input-flex" type="text" id="login" name="login" placeholder="login">
    <input class="input-flex" type="email" id="email" name="email" placeholder="email">
    <input class="input-flex" type="tel" id="phone" name="phone" placeholder="phone">
    <input class="input-flex" type="password" id="password" name="password" placeholder="password">
    <input class="input-flex" type="password" id="passwordConfirm" name="passwordConfirm" placeholder="passwordConfirm">
    </div>
    {{> button }}
    </div>
    <a class='form-go-back-link' href="/login">{{goBackLink}}</a>  
`;