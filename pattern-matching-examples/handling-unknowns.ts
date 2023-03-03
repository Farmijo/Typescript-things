import { match, isMatching, P } from "ts-pattern";
import { HttpRequestKey2 } from "../Enums";

const userPattern = {
    name: P.string,
    postCount: P.number,
    posts: P.array({ title: P.string }),
    age: P.optional(P.number)
  };

//Infer pattern to type
type User = P.infer<typeof userPattern>;

//TypeGuard
const isUserList = isMatching(P.array(userPattern));

//Fake call
const fakeFetchUsers = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Alice", postCount: 20, posts: [] },
        { name: "Bob", postCount: 49, posts: [] },
        { name: "Peter", postCount: 9, posts: [] }
      ]);
    }, 300);
  });

//Function that uses the internalType
const UserPrinter = (users: User[]) => {
    users.map(user=>{
        console.log(user);
    })
}

fakeFetchUsers().then((users)=>{
    const typeUsers: User[] = isUserList(users)? users : [];
    UserPrinter(typeUsers);
})