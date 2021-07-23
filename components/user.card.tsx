import { Avatar, Button, Card, CardBody, CardFooter, Text } from "grommet";
import React from "react";
import { Student } from "../services/students";
import Link from 'next/link'
import * as S from "./styled";

type Props = {
  user: Student;
};

const UserCard: React.FC<Props> = ({ user }) => (
  <Card height="small" width="small">
    <CardBody align="center" pad="medium">
      <Avatar src={user.avatar} />
    </CardBody>
    <S.CardFooter align="start" justify="center" pad="medium">
      <Text textAlign="center">{`${user["first_name"]} ${user["last_name"]}`}</Text>

      <Link href={`/students/${user.id}`} passHref>
        <S.ViewButton secondary label="VIEW STUDENT" />
      </Link>

    </S.CardFooter>
  </Card>
);

export default UserCard;
