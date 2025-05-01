const Chat = async ({ params }: { params: { chat_id: string } }) => {
  const { chat_id } = params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        This is the Chat Page of Chat {chat_id}
      </h2>
    </div>
  );
};

export default Chat;
