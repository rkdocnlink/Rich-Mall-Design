document.getElementById('withdrawalForm').addEventListener('submit', function(event) {
    var accountHolderName = document.getElementById('accountHolderName').value.trim();
    var accountNumber = document.getElementById('accountNumber').value.trim();
    var ifscCode = document.getElementById('ifscCode').value.trim();
    var branchName = document.getElementById('branchName').value.trim();
    var mobileNumber = document.getElementById('mobileNumber').value.trim();

    if (accountHolderName === '') {
        alert('Please enter Account Holder Name.');
        event.preventDefault();
        return false;
    }

    if (/\d/.test(accountHolderName)) {
        alert('Account Holder Name should not contain numbers.');
        event.preventDefault();
        return false;
    }

    if (accountNumber === '') {
        alert('Please enter Account Number.');
        event.preventDefault();
        return false;
    }

    if (!/^\d+$/.test(accountNumber)) {
        alert('Account Number should contain only numbers.');
        event.preventDefault();
        return false;
    }

    if (ifscCode === '') {
        alert('Please enter IFSC Code.');
        event.preventDefault();
        return false;
    }

    if (branchName === '') {
        alert('Please enter Branch Name.');
        event.preventDefault();
        return false;
    }

    if (/\d/.test(branchName)) {
        alert('Branch Name should not contain numbers.');
        event.preventDefault();
        return false;
    }

    if (mobileNumber === '') {
        alert('Please enter Mobile Number.');
        event.preventDefault();
        return false;
    }

    if (!/^\d+$/.test(mobileNumber)) {
        alert('Mobile Number should contain only numbers.');
        event.preventDefault();
        return false;
    }

    // Add more validations if needed

    // If all validations pass, the form will be submitted
});