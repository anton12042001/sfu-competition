import React, {useState} from 'react';
import ChangeFullNameInput from "./ChangeFullNameInput/ChangeFullNameInput";

const ChangeFullName = ({displayName,sendFullName}) => {

    const [editMode, setEditMode] = useState(false)

    const changeFullName = (data) => {
        setEditMode(false)
        sendFullName(data)
    }

    return (
        <div>
            {(editMode === true)
                ? <ChangeFullNameInput changeFullName={changeFullName} />
                : displayName
                    ? <div>Ваше имя: {displayName}</div>
                    : <div>Вы безымянный абитурент, у вас нет имени. Установите его!</div>}
            {!editMode && <button onClick={() => setEditMode(true)} >Установить имя</button> }
        </div>
    );
};

export default ChangeFullName;