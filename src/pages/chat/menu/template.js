export default `
<menu class="side-menu">
    <div class="side-menu-top">
        <button class="side-menu-logo">
            <img src="{{logoButton}}" class="side-menu-logo-icon" alt="logo">
        </button>
    </div>
    <div class="side-menu-center">
      <ul class="side-menu-list">
        {{#each menuList}}
            <li class="side-menu-button">
            <a href="{{href}}">
            <img src="{{image}}" class="side-menu-button" alt={{title}}>
            {{title}}</a>
            </li>
        {{/each}}
    </ul>
    </div>
    <div class="side-menu-bottom">
        <button class="side-menu-logout">
            <a href="{{href}}">
                <img src="{{logoutButton}}" class="side-menu-logout-icon" alt="logout">
            </a>
        </button>
    </div>
</menu>
`;