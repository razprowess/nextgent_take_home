import { Box, Spinner, TextInput } from "grommet";
import React, { useEffect, useMemo, useState } from "react";
import { Container, ErrorText } from "../components/styled";
import UserCard from "../components/user.card";
import { fetchStudents, Student } from "../services/students";
import { LoadingState } from "../services/types";

type Props = {};

const Main: React.FC<Props> = ({ }) => {

  const [searchQuery, setSearchQuery] = useState<string>('');

  const [students, setStudents] = useState<Student[]>([]);

  const [loadingState, setLoadingState] = useState<LoadingState>('idle');

  useEffect(() => {

    //get the list of students.
    setLoadingState('loading');
    fetchStudents().then((apiStudents) => {
      setLoadingState('success')
      setStudents(apiStudents);
      
    }).catch((error) => {
      setLoadingState('error');
    })

  }, []);

  const filteredStudents = useMemo(()=>{ // filter students base on search query.

    let query = searchQuery.toLowerCase();

    return students.filter((student)=> student.first_name.toLowerCase().includes(query) || student.last_name.toLowerCase().includes(query));

  },[searchQuery, students]);


  const onChangeHandler = (event: any) => {

    setSearchQuery(event.target.value || "");

  };

  return (
    <Box direction="column" pad="medium" height="100%" overflow="auto">
      <TextInput placeholder="type here" value={searchQuery} onChange={onChangeHandler} />
      
      {loadingState == 'success' && <Box direction="row" wrap={true}>
        {filteredStudents.map((s) => (
          <Box margin="10px" key={s.id}>
            <UserCard user={s} />
          </Box>
        ))}
      </Box>}

      {loadingState == 'loading' && <Container><Spinner size={'xlarge'} /></Container>}

      {loadingState == 'error'  && <Container><ErrorText>Something went wrong. Please try again by reloading the page</ErrorText></Container>}

    </Box>
  );
};

export default Main;
