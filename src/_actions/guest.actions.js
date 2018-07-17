import { guestConstants } from '../_constants';
import { guestService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const guestActions = {
    getAllLetters
};

function getAllLetters() {
    return dispatch => {
        dispatch(request());

        guestService.getAllLetters()
            .then(
                letters => dispatch(success(letters)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: guestConstants.GETALL_REQUEST } }
    function success(users) { return { type: guestConstants.GETALL_SUCCESS, letters } }
    function failure(error) { return { type: guestConstants.GETALL_FAILURE, error } }
}
