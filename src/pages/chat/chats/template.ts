export default ` 
 {{{header}}}
<ul class='chats'>
    {{#each chats}}
        <li class='chat'>
            <img class='avatar' src='{{this.avatar}}' alt="chat picture"/>
            <div class='chat chat_info'>
                <div class='chat chat_name'>{{this.chatName}}
                <div class='chat_text'>
                    <b>{{this.message.author}}</b>: {{this.message.text}}
                </div>
                </div>
                <div class='chat chat_time'> <img class='unreadMessages' src='{{this.unreadMessages}}' alt="unread messages"/> {{this.message.time}} </div>
            </div>
        </li>
    {{/each}}
</ul>
`;
