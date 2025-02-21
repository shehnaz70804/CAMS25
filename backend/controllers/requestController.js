import Request from "../models/Request.js";

export const createRequest = async (req, res) => {
  const request = new Request({ studentId: req.user.id, ...req.body });
  await request.save();
  res.status(201).json({ message: "Request submitted" });
};

export const getPendingRequests = async (req, res) => {
  const requests = await Request.find({ status: "Pending" });
  res.status(200).json(requests);
};

export const updateRequestStatus = async (req, res) => {
  await Request.findByIdAndUpdate(req.params.id, { status: req.body.status });
  res.status(200).json({ message: "Request updated" });
};
