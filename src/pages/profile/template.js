export default ` 
     <div class='form-title'>{{title}}</div>
    <div class="form-wrapper-3">
    <div class="form-inputs-wrapper_2"><img src='{{{imageSrc}}}' name="avatar">Изменить аватар</div>
    <div class="form-inputs-wrapper">
    <div class="form-inputs-wrapper_2">
    <input class="input-flex" type="text" id="first_name" name="first_name" placeholder="first_name">
    <input class="input-flex" type="text" id="second_name" name="second_name" placeholder="second_name">
    </div>
    <div class="form-inputs-wrapper_2">
     <input class="input-flex" type="text" id="display_name" name="display_name" placeholder="display_name">
     <input class="input-flex" type="text" id="login" name="login" placeholder="login">
    </div>
    <div class="form-inputs-wrapper_2">
    <input class="input-flex" type="email" id="email" name="email" placeholder="email">
    <input class="input-flex" type="tel" id="phone" name="phone" placeholder="phone">
    </div>
    <label class='label'>Изменение пароля:</label>
    <div class="form-inputs-wrapper_2">
    <input class="input-flex" type="password" id="password" name="password" placeholder="password">
    <input class="input-flex" type="confirmPassword" id="confirmPassword" name="confirmPassword" placeholder="confirmPassword">
    </div>
    </div>
    <div class="form-inputs-wrapper">
     {{> button }}
    </div> 
    </div>
`;