export default `
<header class="messages-header">
    <div class='messages-header_user'>
        <img src="{{avatar}}" class="messages-header_user-ava" alt="avatar">
        <div class="messages-header_user-info">
            <span class="messages-header_user-nickname">{{nickname}}</span>
            <span class="messages-header_user-status">{{status}}</span>
        </div>
    </div>
    <button class="messages-header_menu">
        <img src="{{videoIcon}}" class="messages-header_menu-icon" alt="video icon">
        <img src="{{voiceIcon}}" class="messages-header_menu-icon" alt="voice icon">
        <img src="{{menuIcon}}" class="messages-header_menu-icon" alt="menu icon">
    </button>
</header>
`;
