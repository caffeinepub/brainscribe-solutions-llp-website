import List "mo:core/List";

actor {
  type Message = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  let messages = List.empty<Message>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, subject : Text, message : Text) : async () {
    let newMessage : Message = {
      name;
      email;
      subject;
      message;
    };
    messages.add(newMessage);
  };
};
