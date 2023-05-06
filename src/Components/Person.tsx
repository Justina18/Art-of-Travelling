import React from "react";

interface PersonProps {
  name: {
    first: string;
    last: string;
  };
}

interface ListOfPersons {
  list: {
    firstName: string;
    lastName: string;
  }[];
}

const Person = (props: PersonProps & ListOfPersons) => {
  return (
    <div>
      {props.name.first} {props.name.last}, How may you be helped?
      {props.list.map( (name) => {
        return (
            <h3 key={name.firstName} >
                {name.firstName} {name.lastName}
            </h3>
        )
      })}
    </div>
  );
};

export default Person;
