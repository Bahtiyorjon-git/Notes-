function deleteNote(noteId) {
    fetch('/delete-note', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'  // ✅ Qo'shildi
        },
        body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
        window.location.href = '/';
    });
}