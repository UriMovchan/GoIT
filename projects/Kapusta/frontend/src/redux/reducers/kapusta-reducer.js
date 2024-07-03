import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { kapustaActions } from '../actions';

const totalBalance = createReducer('', (builder) => {
  builder
    .addCase(kapustaActions.totalBalanceSuccess, (_, { payload }) =>
      payload.data.balance
    )
    .addCase(kapustaActions.addTotalBalanceSuccess, (_, { payload }) => payload);
});

const loading = createReducer(false, (builder) => {
  builder
    .addCase(kapustaActions.addTotalBalanceSuccess, () => true)
    .addCase(kapustaActions.addTotalBalanceRequest, () => false)
    .addCase(kapustaActions.addTotalBalanceError, () => false)
    .addCase(kapustaActions.totalBalanceSuccess, () => true)
    .addCase(kapustaActions.totalBalanceRequest, () => false)
    .addCase(kapustaActions.totalBalanceError, () => false);
});

const reportYear = createReducer(new Date().getFullYear(), (builder) => {
  builder
    .addCase(kapustaActions.incrementReportYear, (state, _action) => state + 1)
    .addCase(kapustaActions.decrementReportYear, (state, _action) => state - 1);
});

const reportMonth = createReducer(new Date().getMonth(), (builder) => {
  builder
    .addCase(kapustaActions.changeReportMonth, (_state, { payload }) => payload)
    .addCase(kapustaActions.incrementReportMonth, (state, _action) => state + 1)
    .addCase(kapustaActions.decrementReportMonth, (state, _action) => state - 1);
});

const reportYears = createReducer([], (builder) => {
  builder.addCase(kapustaActions.changeReportYears, (_state, { payload }) => payload);
});

const reportSummary = createReducer({}, (builder) => {
  builder.addCase(kapustaActions.getSumCategorySuccess, (_, { payload }) => payload.summary);
});

const totalIncome = createReducer('', (builder) => {
  builder.addCase(kapustaActions.getSumCategorySuccess, (_, { payload }) => payload.totalIncome);
});

const totalExpenses = createReducer('', (builder) => {
  builder.addCase(kapustaActions.getSumCategorySuccess, (_, { payload }) => payload.totalExpenses);
});

const monthlySummary = createReducer([], (builder) => {
  builder.addCase(kapustaActions.fetchMonthlySummarySuccess, (_, { payload }) => payload);
});

const monthlySummaryIncome = createReducer([], (builder) => {
  builder.addCase(kapustaActions.fetchMonthlySummaryIncomeSuccess, (_, { payload }) => payload);
});

const error = createReducer(null, (builder) => {
  builder
    .addCase(kapustaActions.fetchMonthlySummaryError, (_, { payload }) => payload)
    .addCase(kapustaActions.fetchExpenseError, (_, { payload }) => payload)
    .addCase(kapustaActions.fetchIncomeChartDataError, (_, { payload }) => payload)
    .addCase(kapustaActions.fetchAdjustmentsError, (_, { payload }) => payload)
    .addCase(kapustaActions.fetchExpensesChartDataError, (_, { payload }) => payload)
    .addCase(kapustaActions.fetchIncomeError, (_, { payload }) => payload)
    .addCase(kapustaActions.totalBalanceError, (_, { payload }) => payload)
    .addCase(kapustaActions.addAdjustmentsError, (_, { payload }) => payload)
    .addCase(kapustaActions.addExpenseError, (_, { payload }) => payload)
    .addCase(kapustaActions.addIncomeError, (_, { payload }) => payload)
    .addCase(kapustaActions.addTotalBalanceError, (_, { payload }) => payload)
    .addCase(kapustaActions.deleteAdjustmentsError, (_, { payload }) => payload)
    .addCase(kapustaActions.deleteExpenseError, (_, { payload }) => payload)
    .addCase(kapustaActions.deleteIncomeError, (_, { payload }) => payload);
});

const expensesChartData = createReducer([], (builder) => {
  builder.addCase(kapustaActions.fetchExpensesChartDataSuccess, (_state, { payload }) => payload);
});
const incomeChartData = createReducer([], (builder) => {
  builder.addCase(kapustaActions.fetchIncomeChartDataSuccess, (_state, { payload }) => payload);
});

const expense = createReducer([], (builder) => {
  builder
    .addCase(kapustaActions.fetchExpenseSuccess, (_, { payload }) => payload)
    .addCase(kapustaActions.addExpenseSuccess, (state, { payload }) => [payload, ...state])
    .addCase(kapustaActions.deleteExpenseSuccess, (state, { payload }) =>
      state.filter(({ _id }) => _id !== payload)
    );
});

const income = createReducer([], (builder) => {
  builder
    .addCase(kapustaActions.fetchIncomeSuccess, (_, { payload }) => payload)
    .addCase(kapustaActions.addIncomeSuccess, (state, { payload }) => [payload, ...state])
    .addCase(kapustaActions.deleteIncomeSuccess, (state, { payload }) =>
      state.filter(({ _id }) => _id !== payload)
    );
});

const adjustments = createReducer([], (builder) => {
  builder
    .addCase(kapustaActions.fetchAdjustmentsSuccess, (_, { payload }) => payload)
    .addCase(kapustaActions.deleteAdjustmentsSuccess, (state, { payload }) =>
      state.filter(({ _id }) => _id !== payload)
    );
});

export default combineReducers({
  loading,
  totalBalance,
  expense,
  income,
  adjustments,
  reportYear,
  reportMonth,
  reportYears,
  reportSummary,
  monthlySummary,
  monthlySummaryIncome,
  error,
  totalIncome,
  totalExpenses,
  expensesChartData,
  incomeChartData,
});
