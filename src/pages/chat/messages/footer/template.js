export default `
<footer class="messages-footer">
    <button class="messages-footer_emoji">
        <img src="{{emoji}}" class="messages-footer_emoji-icon" alt="emoji files icon">
    </button>
    <button class="messages-footer_attach">
        <img src="{{attach}}" class="messages-footer_attach-icon" alt="attach icon">
    </button>
    <div class="messages-footer_input-wrapper">
        <input class="messages-footer_input" type="text" placeholder={{inputPlaceholder}} name="message"/>
        <button class="messages-footer_send">
            <img src="{{send}}" class="messages-footer_send-icon" alt="send icon">
        </button>
    </div>
    <button class="messages-footer_voice">
        <img src="{{voice}}" class="messages-footer_voice-icon" alt="voice icon">
    </button>
</footer>
`;