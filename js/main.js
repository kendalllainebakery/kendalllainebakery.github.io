(function (window, toastr) {
    if (window.location.hash === '#thank-you') {
        toastr.success('Thank you for your message!');
    }
})(window, toastr);

