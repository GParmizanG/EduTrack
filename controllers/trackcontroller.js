const Material = require("../models/material");
const User = require("../models/user");

exports.addTrack = async (req, res) => {
  const track = await Material.create({
    name: req.body.name,
    content: req.body.content,
    description: req.body.description,
    user_id: req.userId,
  });
  res.status(201).send(track);
};

exports.modifyTrack = async (req, res) => {
  const TrackId = req.params.TrackId;
  const { name, content, description } = req.body;
  const Track = await Track.findOne({ where: { id: trackId } });

  if (track.user_id !== req.userId) {
    return res
      .status(403)
      .send({ message: "You are not authorized to modify this track" });
  }

  await Track.update(
    {
      description: description,
      content: content,
      name: name,
    },
    {
      where: { id: TrackId },
    }
  );

  res.status(200).send({ message: "Track updated successfully" });
};
