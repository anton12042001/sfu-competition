import React from 'react';

const ChangeFullName = ({displayName}) => {
    return (
        <div>
            {displayName ? <div>Ваше имя: {displayName}</div>: <div>Вы безымянный абитурент, у вас нет имени. Установите его!</div>}
            <button>Сменить имя</button>
        </div>
    );
};

export default ChangeFullName;