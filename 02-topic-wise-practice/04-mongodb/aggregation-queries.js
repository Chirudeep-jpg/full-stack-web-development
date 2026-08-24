// MongoDB Aggregation Pipeline Examples
// db.orders.aggregate([ { $match: { status: 'completed' } }, { $group: { _id: '$customer', total: { $sum: '$amount' } } } ])