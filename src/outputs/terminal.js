const { Table } = require('console-table-printer');
const { startTimeToHours } = require('../utils/additional');

module.exports = (stats) => {
  const t1 = new Table({
    title: '🎮 SteamIdler - Active Accounts 🎮',
    columns: [
      { name: 'name', title: '👤 Username', alignment: 'left', width: 20 },
      { name: 'list', title: '🎲 Games', alignment: 'right', width: 18 },
      { name: 'time', title: '⏱️ Time', alignment: 'right', width: 14 },
      { name: 'games', title: '🏆 Games Idled', alignment: 'right', width: 14 },
      { name: 'rounds', title: '🔄 Rounds', alignment: 'right', width: 12 },
      { name: 'status', title: '📊 Status', alignment: 'left', width: 14 }
    ],
    titleAlignment: 'center',
    alignTitle: true,
    border: {
      top: '─',
      bottom: '─',
      left: '│',
      right: '│',
      middle: '─'
    },
    stringLength: (str) => str.length,
    output: 'console'
  });

  stats.forEach((a) => {
    t1.addRow({
      name: a.name,
      list: a.gamesCount,
      time:
        a.idleStartTime === NaN
          ? 'Unknown'
          : a.idleStatus !== 'Idling!'
          ? `${startTimeToHours(a.stoppedIdleTime)} H`
          : `${startTimeToHours(Date.now() - a.idleStartTime)} H`,
      games: a.gamesIdled,
      rounds: a.idleRounds,
      status: a.idleStatus
    });
  });

  console.clear();
  t1.printTable();
};
