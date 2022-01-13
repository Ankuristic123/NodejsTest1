const Excel = require('../models/mongo-task');

const responseHandler = require('response-handler');
const dotenv = require('dotenv');
// const moment = require('moment');

dotenv.config();

const downloadExcel = async (req, res) => {
  const {PacketNo,Shape,Weight,Color,Purity,Cut,Pol,Sym,Fls,Lab,Rate,Disc } = req.body;

  try {
    const newExcelSaved = await userExcel.save();
    res.status(200).send(newExcelSaved);
    // return responseHandler(res, 200, null, newInvoiceSaved);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
    // return responseHandler(res, 200, error, null);
  }
};



const allExcel = async (req, res) => {
  let { page, size } = req.query; //pagination
  page = page ? page : 1;
  size = size ? size : 2;
  const limit = parseInt(size);
  const skip = (page - 1) * size;

  // if (req.query.sortBy) {
  //   const parts = req.query.sortBy.split(':');
  //   sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  // }
  const sort = req.query.sortBy === 'desc' ? -1 : 1; //sorting

  //filtering
  const { date, ExcelBy } = req.query;
  const match = {};
  match.createdAt = date ? date : null;
  match.ExcelBy = ExcelBy ? ExcelBy : null;

  try {

    res.status(200).send(ExcelList);
    // return responseHandler(res, 200, null, invoiceList);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'somthing went wrong!' });
    // return responseHandler(res, 500, error, null);
  }
};

const searchExcel = async (req, res) => {
  //search invoice by id
  const { id } = req.params;
  try {
    let ExcelList;
    res.status(200).send(ExcelList);
    // return responseHandler(res, 200, null, invoiceList);
  } catch (error) {
    res.status(500).send({ message: 'somthing went wrong' });
    // return responseHandler(res, 500, error, null);
  }
};

module.exports = {
  downloadExcel,
  allExcel,
  searchExcel
};