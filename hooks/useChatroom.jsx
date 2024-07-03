import { useSession } from "next-auth/react";
import React, { useCallback, useMemo } from "react";
import useDatabase from "./useDatabase";
import axios from "axios";

const useChatroom = () => {
  const { data: session } = useSession();

  const createChatRoom = useMemo(
    () => async (receiverId) => {
      const chatRoom = {
        senderId: session?.user?.email,
        receiverId,
      };

      try {
        // Batch request to fetch chat rooms and create/retrieve the room
        const [existingRooms, createdRoom] = await Promise.all([
          axios.get("/api/get/chatrooms").then((res) => res.data.data),
          axios.post("/api/post/room", chatRoom).then((res) => res.data.data),
        ]);

        const roomId = existingRooms?.find((room) => {
          const isSenderMatch =
            room.senderId === session?.user?.email ||
            room.senderId === receiverId;
          const isReceiverMatch =
            room.receiverId === session?.user?.email ||
            room.receiverId === receiverId;

          return isSenderMatch && isReceiverMatch;
        });

        return roomId?.[0]?._id || createdRoom;
      } catch (error) {
        console.error("Error creating/retrieving chat room:", error);
        return null;
      }
    },
    [session]
  );

  const fetchChatsByRoomId = async (id) => {
    try {
      const res = await axios.get(`/api/get/chats?id=${id}`);
      return res.data.data;
    } catch (error) {
      console.error("Error fetching chats by room ID:", error);
      return [];
    }
  };

  return { createChatRoom, fetchChatsByRoomId };
};

export default useChatroom;
