import React, {useState} from 'react';
import {Box, Grid} from '@mui/material';
import {
    StyledIconAndTitleBox,
    StyledLeftBox,
    StyledProfilePaper,
    StyledRightBox
} from "./CandidateProfilePersonalInformation.styles";
import ProfilePersonIcon from "../atoms/ProfilePersonIcon";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import ProfilePhoto from "../atoms/ProfilePhoto";
import IconButton from "@mui/material/IconButton";
import ProfileEditIcon from "../atoms/ProfileEditIcon";
import ProfileCheckIcon from "../atoms/ProfileCheckIcon";

function EditableInput({isEdit, value, onChange, placeholder}) {
    if (isEdit) {
        return <input type="text" placeholder={placeholder} value={value} onChange={onChange}/>;
    } else {
        return <span>{value.toString()}</span>;
    }
}

export default function CandidateProfilePersonalInformation() {


    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState('Name Surname');
    const [city, setCity] = useState('City');
    const [email, setEmail] = useState('email@example.com');
    const [linkedin, setLinkedIn] = useState('https://www.linkedin.com/');
    const [github, setGitHub] = useState('https://github.com/');
    const [cv, setCv] = useState(null);
    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveClick = () => {
        setIsEdit(false);
    };

    return (
        <StyledProfilePaper>
            <Grid container>
                <StyledLeftBox>
                    <StyledIconAndTitleBox>
                        <ProfilePersonIcon/>
                        <ProfileContainerTitle text={'Personal information'}/>
                    </StyledIconAndTitleBox>
                    {/* Photo */}
                    <Box mb={2}>
                        <ProfilePhoto/>
                    </Box>
                    {/* Name */}
                    <Box mb={1}>
                        <EditableInput
                            isEdit={isEdit}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name Surname"
                        />
                    </Box>
                    {/* City */}
                    <Box mb={1}>
                        <EditableInput
                            isEdit={isEdit}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                        />
                    </Box>
                    {/* Email */}
                    <Box mb={1}>
                        {email}
                    </Box>
                </StyledLeftBox>

                <StyledRightBox>
                    <Box mb={1}>
                        <EditableInput
                            isEdit={isEdit}
                            value={linkedin}
                            onChange={(e) => setLinkedIn(e.target.value)}
                            placeholder="LinkedIn profile link"
                        />
                    </Box>
                    <Box mb={1}>
                        <EditableInput
                            isEdit={isEdit}
                            value={github}
                            onChange={(e) => setGitHub(e.target.value)}
                            placeholder="GitHub profile link"
                        />
                    </Box>
                    <Box mb={1}>
                        <span>CV: </span>
                        <br/>
                        <input type="file" accept=".pdf,.doc,.docx"/>
                    </Box>
                    <Box>
                        {/* Edit button */}
                        {isEdit ? (
                            <IconButton onClick={handleSaveClick}>
                                <ProfileCheckIcon/>
                            </IconButton>
                        ) : (
                            <IconButton onClick={handleEditClick}>
                                <ProfileEditIcon/>
                            </IconButton>
                        )}
                    </Box>
                </StyledRightBox>
            </Grid>
        </StyledProfilePaper>
    );
};

