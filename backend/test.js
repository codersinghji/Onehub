import dns from "dns";

dns.resolveSrv(
  "_mongodb._tcp.cluster0.y6xyjtx.mongodb.net",
  (err, records) => {
    console.log(err);
    console.log(records);
  }
);