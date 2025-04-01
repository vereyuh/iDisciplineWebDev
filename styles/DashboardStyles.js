import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F0F4F8',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    width: 120,
    height: 120,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 16,
  },
  cardCount: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sidebar: {
    width: 250,
    backgroundColor: '#0052cc',
    paddingVertical: 30,
  },
  profile: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userPosition: {
    color: '#FFF',
    fontSize: 14,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingLeft: 20,
  },
  menuText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 15,
  },
  offendersContainer: {
    marginLeft: 20,
  },
  offendersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  offendersSubtitle: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  offenderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  offenderAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  offenderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  offenderPosition: {
    fontSize: 14,
    color: '#555',
  },
});
