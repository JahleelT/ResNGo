import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { FlatList } from "react-native";
import EventCard from '@/components/EventCard';
import { data as events } from '@/constants/events';

export default function EventsScreen() {

  return (
    <ThemedView>

      <ThemedText>Events Screen</ThemedText>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EventCard event={item} />}
      />

    </ThemedView>
  );
}
