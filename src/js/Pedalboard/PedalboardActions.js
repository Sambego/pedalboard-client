export const FETCH = 'pedalboard/FETCH';
export const ADD = 'pedalboard/ADD';
export const REMOVE = 'pedalboard/REMOVE';
export const UPDATE_PEDAL_PARAM = 'pedalboard/UPDATE_PEDAL_PARAM';

export function addPedal(pedal) {
    return {
        type: ADD,
        pedal
    };
};

export function removePedal(id) {
    return {
        type: REMOVE,
        id
    };
};

export function updatePedalParam(id, effect, field, value) {
    return {
        type: UPDATE_PEDAL_PARAM,
        id,
        effect,
        field,
        value,
    };
};
