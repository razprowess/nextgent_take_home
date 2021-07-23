import { Button, CardBody, CardHeader, Paragraph as GrommetParagraph, CardFooter as GrommetCardFooter, Avatar } from 'grommet';
import styled from 'styled-components';


/**
 *  The following are exported styled components used through out different pages of this take home project.
 *  In a typical, fully functional, large application, my approach would be to have the styled components scoped 
 *  per feature or per component, instead of having one file for everything.
 */


export const Container = styled.div`
  display: xflex;
  margin: 32px;
  justify-content: center;
`

export const ErrorText = styled.p`
  color: red;
`

export const Row = styled.div`
    display: flex;
    padding: 12px;
    flex-direction: row;
    align-items: center;
`

export const FlexCell = styled.div`
    flex: 1;
`

export const Cell = styled.div`
`

export const BoldParagraph = styled(GrommetParagraph)`
    font-weight: bold;
    font-size: 16px;
    margin: 0px;
`


export const Paragraph = styled(GrommetParagraph)`
    font-weight: bold;
    font-size: 15px;
    margin: 0px;
`

export const StudentDetailsCardHeader = styled(CardHeader)`
    border-bottom: 1px solid #EFEFEE;
    font-weight: bold;
`

export const StudentDetailsCardBody = styled(CardBody)`
    padding: 8px;
`

export const BackButton = styled(Button)`
    max-width: 150px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const DetailsWrapper = styled.div`
    max-width: 700px;
`

export const CardFooter = styled(GrommetCardFooter)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ViewButton = styled(Button)`
    max-width: 150px;
    font-weight: bold;
    font-size: 12px;
    margin-top: 16px;
`

export const StudentDetailsAvatar = styled(Avatar)`
    margin: 0 auto;
`