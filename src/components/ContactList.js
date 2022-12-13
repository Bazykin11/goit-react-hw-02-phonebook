import styled from '@emotion/styled'

export const ContactList = ({visibleFilter, onDeleteContact}) => {
    return (
        <ContactListStyle>
            {visibleFilter.map(contact => 
            (
            <ContactItem key={contact.id}>
                <p>{contact.name} : {contact.number}</p>
                <Button onClick={()=> onDeleteContact(contact.id)}>Delete</Button>
            </ContactItem>
            ))}
        </ContactListStyle>
    )
}



/////////////////////////////// STYLE /////////////////////////

const Button = styled.button`
background: transparent;
background-color: transparent;
margin-left: 10px;
border: 1px solid;
border-radius: 10px;
font-size: 10px;

`;

const ContactListStyle = styled.ul`
list-style: none;
`

const ContactItem = styled.li`
display: flex;
align-items: center;
justify-content: baseline;
`

