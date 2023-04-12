export default `
<div class="messages-layout">
    {{{header}}}
    <main>
        <ul class='messages'>
            {{#each messages}}
                <li class='message message_{{#if this.author}}out{{else}}in{{/if}}'>
                    <div class='text'>{{this.text}}</div>
                    <div class='time'>{{this.time}}</div>
                </li>
            {{/each}}
        </ul>
        {{{footer}}}
    </main>
</div>
`;
