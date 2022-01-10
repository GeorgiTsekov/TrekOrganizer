import { useState, useEffect } from "react";

import *as trekService from '../services/trekService';

const useTrekState = (trekId) => {
    const [trek, setTrek] = useState({});

    useEffect(() => {
        trekService.getOne(trekId)
            .then(trekResult => {
                setTrek(trekResult);
            });
    }, [trekId]);

    return[
        trek,
        setTrek
    ]
}

export default useTrekState;