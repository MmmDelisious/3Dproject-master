Surfaces.prototype.bublik = (count = 10, R = 10) => {
    const points = [];
    const edges = [];
    const polygons = [];

    function setRoundOfPoints(count, R) {
        const da = 2 * Math.PI / count;
        for (let i = 0; i < 2 * Math.PI; i += da) {
            const x = R * Math.sin(i);
            const z = R * Math.cos(i);
            const y = 5;
            points.push(new Point(x, y, z));
        }
    }

    setRoundOfPoints(count, R);
    setRoundOfPoints(count, R / 1.4);

    for (let i = 0; i < points.length; i++) {
        if (points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
        if (points[i + 1] && i !== count - 1) {
            edges.push(new Edge(i, i + 1));
        }
        edges.push(new Edge(0, count - 1));
        edges.push(new Edge(count, 2*count - 1));
    }

    for (let i = 0; i < count - 1; i++) {
        polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], "#FF8C00"));
    }
    polygons.push(new Polygon([count - 1, 0, count, points.length - 1], "#FF8C00"));

    return new Subject(points, edges, polygons);
}