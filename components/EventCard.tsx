import { ThemedView} from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Pressable } from "react-native";
import type { Event } from '@/constants/events';

type EventCardProps = {
    event: Event;
    onPress?: () => void;
}

export default function EventCard({ event, onPress }: EventCardProps) { 

  return (
  <Pressable onPress={onPress}>
    {({ pressed }) => (
      <ThemedView style={{ opacity: pressed ? 0.7 : 1 }}>
        <ThemedText>{event.name}</ThemedText>
        <ThemedText>{event.organizer}</ThemedText>
        <ThemedText>{event.address}</ThemedText>
        <ThemedText>{event.location}</ThemedText>
        <ThemedText>
          {event.date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "long",
            year: "numeric",
          }) + " · " + event.time}
        </ThemedText>
        <ThemedText>{event.description}</ThemedText>
        <ThemedText>{event.capacity}</ThemedText>
        <ThemedText>{event.type}</ThemedText>
        <ThemedText>{event.going ? "Yes" : "No"}</ThemedText>
      </ThemedView>
    )}
  </Pressable>
  );
}
