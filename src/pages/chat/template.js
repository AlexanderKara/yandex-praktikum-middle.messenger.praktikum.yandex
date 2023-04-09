export default `
<div class="container">
    <side class="container_menu main-containter-theme">
        {{{menu}}}
    </side>
    <main class="container_messenger main-containter-theme">
        <header class="container_header">
        {{{header}}}
        </header>
        <main class="container_main">
            <chatlist class="container_chats">
                {{{chats}}}
            </chatlist>
            <chat class="container_chat">
                {{{messages}}}
            </chat>
        </main>
    </main>
</div>
`;
