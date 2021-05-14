import React, {ChangeEvent} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {GoCloudUpload} from "react-icons/all";

type PropsType = {
    changeUserPhoto: (photos: File) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }),
);

export const UploadButton: React.FC<PropsType> = ({changeUserPhoto}) => {
    const classes = useStyles();

    const onChangeUserPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            changeUserPhoto(e.target.files[0])
        }
    }
    return (
        <div className={classes.root}>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={onChangeUserPhoto}/>
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span" size="medium">
                    <GoCloudUpload style={{fontSize: "2.5rem"}}/>
                </IconButton>
            </label>
        </div>
    );
}