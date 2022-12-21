
const active = true;

/* let message = '';

if (active) {
    message = 'active';
} else {
    message = 'inactive';
}; */


const message = ( active ) ? 'Active' : 'Inactive';// this is an aternative using a ternary conditional

//const message = (active === true) && 'Active'

//const message = active && 'Active' //in case that a condition is meet and if not we must do notyhing this is useful

//const message = !active && 'Active'

console.log(message);