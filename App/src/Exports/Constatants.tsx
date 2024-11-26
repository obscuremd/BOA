import { Car, Cart, GraphUp, ReportsSolid } from "iconoir-react";

export const IsMobile = window.innerWidth < 768;

export const menuItems = [
    { icon: <GraphUp/>, name:'Account', link: '/' },
    { icon: <Car/>, name:'Transfers', link: '/transfer' },
    { icon: <ReportsSolid/>, name:'History', link: '/history' },
    { icon: <Cart/>, name:'Help & Support', link: '/help&support' },
]

export const transactions = [
    { name: 'PAYMENTREC VERIZON WEB', amount: '114', type: false, date: '19-11-2024' }, // Debit for payment
    { name: 'ACH PT AMEX EPAYMENT WEB ER AM', amount: '75', type: false, date: '18-11-2024' }, // Debit for payment
    { name: 'Web Bill Payment', amount: '200', type: false, date: '17-11-2024' }, // Debit for bill
    { name: 'ATM Withdrawal', amount: '300', type: false, date: '16-11-2024' }, // Debit for cash withdrawal
    { name: 'Interac Purchase - ELECTRONICS', amount: '285', type: false, date: '15-11-2024' }, // Debit for purchase
    { name: 'Interac Purchase - SUPERMARKET', amount: '187', type: false, date: '14-11-2024' }, // Debit for groceries
    { name: 'ATM Withdrawal - Chase', amount: '500', type: false, date: '13-11-2024' }, // Debit for cash withdrawal
    { name: 'Interac Refund - ELECTRONICS', amount: '285', type: true, date: '12-11-2024' }, // Credit for refund
    { name: 'Telephone Bill Payment - VISA', amount: '9', type: false, date: '11-11-2024' }, // Debit for bill
    { name: 'Uber Ride Payment', amount: '35', type: false, date: '10-11-2024' }, // Debit for transportation
    { name: 'Netflix Subscription', amount: '15', type: false, date: '09-11-2024' }, // Debit for subscription
    { name: 'Salary Deposit', amount: '3000', type: true, date: '08-11-2024' }, // Credit for salary
    { name: 'Interac Purchase - RESTAURANT', amount: '60', type: false, date: '07-11-2024' }, // Debit for dining
    { name: 'Interac Refund - SUPERMARKET', amount: '187', type: true, date: '06-11-2024' }, // Credit for refund
    { name: 'Car Loan Payment', amount: '400', type: false, date: '05-11-2024' }, // Debit for loan payment
    { name: 'Electricity Bill Payment', amount: '120', type: false, date: '04-11-2024' }, // Debit for bill
    { name: 'Mobile Recharge - Verizon', amount: '45', type: false, date: '03-11-2024' }, // Debit for recharge
    { name: 'Interac Purchase - CLOTHING STORE', amount: '220', type: false, date: '02-11-2024' }, // Debit for shopping
    { name: 'Gift Card Purchase - AMAZON', amount: '100', type: false, date: '01-11-2024' }, // Debit for purchase
    { name: 'Grocery Store Refund', amount: '50', type: true, date: '31-10-2024' }, // Credit for refund
];
