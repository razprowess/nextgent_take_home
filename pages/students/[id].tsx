import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Card, CardBody, CardHeader, Header, Heading, Paragraph, Spinner, TextInput } from "grommet";
import { useRouter } from 'next/router'
import { fetchStudent, Student } from "../../services/students";
import { LoadingState } from "../../services/types";
import * as S from "../../components/styled";
import StudentInfoDetailsRow from "./info.row";
import Link from "next/link";



const StudentInfo = () => {
  const router = useRouter()
  const { id } = router.query

  const [student, setStudent] = useState<Student>();

  const [loadingState, setLoadingState] = useState<LoadingState>('idle');

  useEffect(() => {

    setLoadingState('loading');

    fetchStudent(id as string).then((student) => {

      setLoadingState('success');

      setStudent(student);

    }).catch((error) => {

      setLoadingState('error');

    });

  }, [id]);

  return (
    <Box direction="column" pad="medium" height="100%" overflow="auto">

      {loadingState == 'success' && (

        <S.DetailsWrapper>
          <Link href={'/'}>
          <S.BackButton secondary label="GO BACK" />
          </Link>
          <Card>

            <S.StudentDetailsCardHeader pad="medium">STUDENT DETAILS</S.StudentDetailsCardHeader>

            <S.StudentDetailsCardBody>

              <S.StudentDetailsAvatar src={student?.avatar} />

              <StudentInfoDetailsRow label="First Name" value={student?.first_name} />

              <StudentInfoDetailsRow label="Last Name" value={student?.last_name} />

              <StudentInfoDetailsRow label="Email Address" value={student?.email} />

              <StudentInfoDetailsRow label="Job" value={student?.job} />

              <StudentInfoDetailsRow label="Company" value={student?.company} />

            </S.StudentDetailsCardBody>

          </Card>
        </S.DetailsWrapper>
      )}

      {loadingState == 'loading' && <S.Container><Spinner size={'xlarge'} /></S.Container>}

      {loadingState == 'error' && <S.Container><S.ErrorText>Something went wrong. Please try again by reloading the page</S.ErrorText></S.Container>}

    </Box>
  );


}

export default StudentInfo;