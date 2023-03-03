import { isMatching, match, P, Pattern } from "ts-pattern";

type simpleKeyValue = {key: string, value: string};

// Type pattern
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


type PossibleTypes =
   simpleKeyValue
  | User[]

const basicMatch = (value: PossibleTypes, index: number) =>
  match(value)
  .when(isUserList, (value=>console.log("User type is matched")))
  .otherwise(()=> console.log("Value is not checked"))

  const inputs: PossibleTypes[] = [
    [
        { name: "Alice", postCount: 20, posts: [] },
        { name: "Bob", postCount: 49, posts: [] },
        { name: "Peter", postCount: 9, posts: [] }
    ],
    {
        key: "foo",
        value: "bar"
    }
  ];

  inputs.map(basicMatch)

