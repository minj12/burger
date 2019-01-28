connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }